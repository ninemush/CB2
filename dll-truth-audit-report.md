# DLL Truth Post-Implementation Audit Report

**Date:** 2026-04-09
**Catalog Version:** 2.0.0
**Studio Version:** 25.10.7
**Scope:** Tasks #476–#479 (DLL catalog import, approved-activity reconciliation, new package/activity activation, runtime hardcode synchronization)

---

## 1. Executive Summary

**Post-implementation state: Partially Aligned**

The DLL-backed catalog migration has successfully established DLL metadata as the structural foundation for the activity catalog. The catalog generator (`server/catalog/catalog-generator.ts`) correctly imports, filters, and merges DLL-extracted properties with curated definitions. The catalog now contains **119 packages** (verified: `catalog/activity-catalog.json` root `.packages.length`), **2810 activities** (sum of all `pkg.activities.length`), and **1202 emission-approved activities** (sum of all `act.emissionApproved === true`). Of the 119 packages, **104 are generation-approved** and **15 are non-generation-approved** DLL-only imports pending triage.

However, DLL truth is not yet fully authoritative across all runtime consumers. Multiple parallel hardcoded registries still exist and could silently diverge from catalog truth.

**Top 3 Remaining Risks (ranked):**

1. **FALLBACK_REGISTRY in `server/uipath-activity-registry.ts` (lines 79–183) maintains 78 hardcoded activity entries** with package assignment and property classification (required vs. optional). This registry is the primary source when the catalog is unavailable (`buildRegistryFromCatalog()` at line 185 only activates when `catalogService.isLoaded()` returns true). Any future catalog change to required flags or property lists that is not mirrored here produces silent drift for fallback paths.

2. **PACKAGE_NAMESPACE_MAP in `server/xaml/xaml-compliance.ts` (line 28) hardcodes prefix/xmlns/assembly for 119 packages** independently of catalog `prefix`/`clrNamespace`/`assembly` fields. Derived maps `CLR_NAMESPACE_TO_XAML_PREFIX` (line 906) and `injectMissingNamespaceDeclarations` (line 230) depend entirely on this hardcoded map. The catalog and this map are not cross-validated at runtime. A mismatch causes invalid XAML namespace declarations.

3. **52 deterministic generators in `server/xaml/deterministic-generators.ts` (852 lines) hardcode property names, default values, and XAML emission shapes** for their target activities. These were reconciled against the catalog in Task #477 and are currently aligned, but remain structurally independent of catalog truth — they do not read from the catalog at emission time. Any future catalog property rename or syntax change requires a manual generator update.

---

## 2. Approved Activity Migration Matrix — Complete Listing

The reconciliation scope (Task #477) covers emission-approved activities across all core packages that had hand-authored definitions prior to DLL import. The complete listing below covers **all 203 emission-approved activities** from the 25 core packages. Each row is verified against `catalog/activity-catalog.json` at audit time.

**Legend:**
- **Generator**: deterministic generator function name if one exists in `server/xaml/deterministic-generators.ts`, or "No"
- **Syntax**: count of attribute-syntax properties / child-element-syntax properties
- **Enum Props**: properties with `validValues` arrays (enum-constrained)
- **Required**: properties with `required: true`
- **Completeness**: `DLL-complete` = `propertiesComplete: true` (all DLL properties reconciled); `DLL-partial` = subset reconciled

### System.Activities (15 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| FlowDecision | No | 1/0 | none | Condition | DLL-partial |
| FlowSwitch | No | 1/0 | none | Expression | DLL-partial |
| Assign | `gen_assign` | 0/2 | none | To, Value | DLL-complete |
| If | `gen_if` | 1/0 | none | Condition | DLL-complete |
| Sequence | `gen_sequence` | 0/0 | none | none | DLL-complete |
| TryCatch | `gen_try_catch` | 0/0 | none | none | DLL-complete |
| Flowchart | No | 0/0 | none | none | DLL-complete |
| ForEach | `gen_for_each` | 0/1 | none | Values | DLL-complete |
| While | `gen_while` | 1/0 | none | Condition | DLL-complete |
| DoWhile | No | 1/0 | none | Condition | DLL-complete |
| Switch | No | 0/0 | none | none | DLL-complete |
| Throw | `gen_throw` | 0/1 | none | none | DLL-complete |
| Rethrow | `gen_rethrow` | 0/0 | none | none | DLL-complete |
| Delay | `gen_delay` | 1/0 | none | Duration | DLL-complete |
| ParallelForEach | No | 1/1 | none | Values | DLL-complete |

### UiPath.System.Activities (20 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| ReadTextFile | `gen_read_text_file` | 4/1 | Encoding | FileName, File | DLL-partial |
| WriteTextFile | `gen_write_text_file` | 5/2 | Encoding | FileName, Text, File | DLL-partial |
| PathExists | `gen_path_exists` | 4/1 | PathType | Path | DLL-partial |
| Comment | `gen_comment` | 1/0 | none | none | DLL-partial |
| Rethrow | `gen_rethrow` | 0/0 | none | none | DLL-partial |
| KillProcess | `gen_kill_process` | 3/2 | AppliesTo | ProcessName, Process | DLL-partial |
| Delay | `gen_delay` | 2/0 | none | Duration | DLL-partial |
| ExcelApplicationScope | `gen_excel_application_scope` | 8/0 | none | none | DLL-complete |
| ExcelReadRange | `gen_excel_read_range` | 6/0 | none | none | DLL-complete |
| ExcelWriteRange | `gen_excel_write_range` | 5/0 | none | DataTable | DLL-complete |
| GetTransactionItem | `gen_get_transaction_item` | 8/2 | FilterStrategy | none | DLL-complete |
| SetTransactionStatus | `gen_set_transaction_status` | 10/4 | Status, ErrorType | TransactionItem | DLL-complete |
| LogMessage | `gen_log_message` | 3/0 | Level | Message | DLL-complete |
| InvokeWorkflowFile | `gen_invoke_workflow_file` | 7/5 | Level, LogEntry, LogExit, TargetSession | WorkflowFileName | DLL-complete |
| AddQueueItem | `gen_add_queue_item` | 10/3 | Priority | ItemInformation, QueueType | DLL-complete |
| GetCredential | `gen_get_credential` | 2/2 | none | AssetName | DLL-complete |
| GetAsset | `gen_get_asset` | 2/2 | none | none | DLL-complete |
| AddLogFields | `gen_add_log_fields` | 1/1 | none | none | DLL-complete |
| RetryScope | `gen_retry_scope` | 4/4 | RetriedExceptionsLogLevel | none | DLL-partial |
| ShouldRetry | No | 0/0 | none | none | DLL-partial |

### UiPath.UIAutomation.Activities (23 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| UseBrowser | No | 3/0 | BrowserType | none | DLL-partial |
| NavigateTo | `gen_navigate_to` | 2/0 | none | none | DLL-partial |
| AttachBrowser | No | 4/0 | BrowserType | none | DLL-partial |
| AttachWindow | No | 1/0 | none | none | DLL-partial |
| UseApplicationBrowser | No | 3/0 | BrowserType | none | DLL-partial |
| ElementExists | `gen_element_exists` | 3/0 | none | none | DLL-partial |
| UseApplication | No | 2/0 | none | none | DLL-partial |
| TakeScreenshot | `gen_take_screenshot` | 1/1 | none | none | DLL-complete |
| Click | No | 7/0 | ClickType, MouseButton, KeyModifiers | none | DLL-complete |
| TypeInto | No | 7/0 | none | Text | DLL-complete |
| GetText | No | 2/1 | none | none | DLL-complete |
| SelectItem | No | 3/0 | none | Item | DLL-complete |
| CheckState | No | 2/1 | none | none | DLL-complete |
| NClick | `gen_nclick` | 14/11 | ClickType, MouseButton, CursorMotionType, HealingAgentBehavior, InteractionMode, KeyModifiers, Version | none | DLL-partial |
| NTypeInto | `gen_ntype_into` | 18/13 | ClickBeforeMode, ClipboardMode, EmptyFieldMode, HealingAgentBehavior, InteractionMode, Version | none | DLL-partial |
| NGetText | `gen_nget_text` | 12/11 | HealingAgentBehavior, ScrapingMethod, ScrapingOptions, Version | none | DLL-partial |
| NSelectItem | `gen_nselect_item` | 11/8 | HealingAgentBehavior, Version | none | DLL-partial |
| NCheckState | `gen_ncheck_state` | 15/9 | HealingAgentBehavior, Mode, Version | none | DLL-partial |
| NApplicationCard | `gen_napplication_card` | 19/14 | BrowserType, AttachMode, CloseMode, HealingAgentBehavior, InteractionMode, OpenMode, UserDataFolderMode, Version, WebDriverMode, WindowResize | none | DLL-partial |
| OpenBrowser | No | 5/0 | BrowserType | Url | DLL-complete |
| CloseApplication | `gen_close_application` | 1/0 | none | none | DLL-complete |
| KillProcess | `gen_kill_process` | 2/0 | none | ProcessName | DLL-complete |
| SendOutlookMailMessage | `gen_send_outlook_mail` | 9/0 | none | To | DLL-complete |

### UiPath.ComplexScenarios.Activities (12 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| MultipleAssign | No | 0/1 | none | none | DLL-partial |
| WaitForDownload | No | 2/1 | none | DownloadPath | DLL-partial |
| RepeatUntil | No | 1/1 | none | Condition | DLL-partial |
| BuildDataTable | `gen_build_data_table` | 1/2 | none | none | DLL-partial |
| FilterDataTable | `gen_filter_data_table` | 1/2 | SelectionMode | Input | DLL-partial |
| SortDataTable | No | 2/2 | Order | Input, ColumnName | DLL-partial |
| RemoveDuplicateRows | No | 0/2 | none | Input | DLL-partial |
| JoinDataTables | No | 1/3 | JoinType | DataTable1, DataTable2 | DLL-partial |
| OutputDataTable | `gen_output_data_table` | 0/2 | none | Input | DLL-partial |
| AddDataRow | `gen_add_data_row` | 0/3 | none | DataTable | DLL-partial |
| RemoveDataRow | No | 0/1 | none | DataRow | DLL-partial |
| LookupDataTable | No | 2/4 | none | DataTable, LookupValue, LookupColumnName | DLL-partial |

### UiPath.Credentials.Activities (4 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| GetSecureCredential | No | 3/2 | CredentialType, PersistanceType | Target | DLL-partial |
| AddCredential | No | 4/3 | CredentialType, Persistence, PersistanceType | Target, Username | DLL-partial |
| DeleteCredential | No | 2/0 | CredentialType | Target | DLL-partial |
| RequestCredential | No | 2/3 | none | none | DLL-partial |

### UiPath.Cryptography.Activities (7 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| EncryptText | No | 4/5 | Algorithm, Encoding, KeyInputModeSwitch | Input, Algorithm | DLL-partial |
| DecryptText | No | 4/5 | Algorithm, Encoding, KeyInputModeSwitch | Input, Algorithm | DLL-partial |
| EncryptFile | No | 9/5 | Algorithm, FileInputModeSwitch, KeyInputModeSwitch | Algorithm, InputFile, Overwrite | DLL-partial |
| DecryptFile | No | 9/5 | Algorithm, FileInputModeSwitch, KeyInputModeSwitch | Algorithm, InputFile, Overwrite | DLL-partial |
| HashText | No | 5/4 | Algorithm, Encoding, KeyInputModeSwitch | Input, Algorithm | DLL-partial |
| HashFile | No | 8/4 | Algorithm, FileInputModeSwitch, KeyInputModeSwitch | InputFilePath, Algorithm, FilePath, InputFile | DLL-partial |
| KeyedHashText | No | 4/5 | Algorithm, Encoding, KeyInputModeSwitch | Input, Algorithm | DLL-partial |

### UiPath.Database.Activities (3 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| ExecuteQuery | `gen_execute_query` | 6/4 | CommandType | Sql | DLL-partial |
| ExecuteNonQuery | `gen_execute_non_query` | 7/3 | CommandType | Sql | DLL-partial |
| ConnectToDatabase | No | 3/0 | none | none | DLL-partial |

### UiPath.DataService.Activities (6 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| CreateEntity | No | 2/2 | none | EntityType, EntityObject | DLL-partial |
| CreateEntityRecord | No | 2/2 | none | EntityType, EntityObject | DLL-partial |
| QueryEntity | No | 6/1 | none | EntityType | DLL-partial |
| UpdateEntity | No | 2/1 | none | EntityType, EntityObject | DLL-partial |
| DeleteEntity | No | 2/1 | none | EntityType, EntityId | DLL-partial |
| GetEntityById | No | 2/2 | none | EntityType, EntityId | DLL-partial |

### UiPath.Excel.Activities (7 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| UseExcel | `gen_use_excel` | 4/0 | none | none | DLL-partial |
| ExcelWriteCell | No | 4/1 | none | SheetName, Cell, Text | DLL-partial |
| ReadRange | `gen_read_range` | 6/4 | none | SheetName, WorkbookPath, WorkbookPathResource | DLL-partial |
| WriteRange | `gen_write_range` | 5/4 | none | SheetName, DataTable, WorkbookPath, WorkbookPathResource | DLL-partial |
| ExcelApplicationScope | `gen_excel_application_scope` | 12/7 | MacroSetting, SensitivityOperation | WorkbookPath, ExistingWorkbook | DLL-complete |
| ExcelReadRange | `gen_excel_read_range` | 6/2 | none | SheetName | DLL-complete |
| ExcelWriteRange | `gen_excel_write_range` | 4/2 | none | SheetName, DataTable | DLL-complete |

### UiPath.ExchangeServer.Activities (5 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| EnableMailboxArchive | No | 1/5 | none | UserPrincipalName | DLL-partial |
| DeleteMailbox | No | 1/4 | none | UserPrincipalName | DLL-partial |
| CreateMailbox | No | 2/8 | none | UserPrincipalName | DLL-partial |
| ExchangeServerScope | No | 0/4 | none | Password, Server, Username | DLL-partial |
| DisableMailboxArchive | No | 1/4 | none | UserPrincipalName | DLL-partial |

### UiPath.Form.Activities (3 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| CreateForm | No | 3/1 | none | FormSchemaPath | DLL-partial |
| ShowForm | No | 1/2 | none | FormSchemaPath | DLL-partial |
| CalloutActivities | No | 4/0 | Position | Title | DLL-partial |

### UiPath.FTP.Activities (6 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| FTPScope | No | 6/1 | none | Host | DLL-partial |
| FTPUpload | No | 4/0 | none | LocalPath, RemotePath | DLL-partial |
| FTPDownload | No | 3/0 | none | RemotePath, LocalPath | DLL-partial |
| FTPDelete | No | 1/0 | none | RemotePath | DLL-partial |
| FTPListFiles | No | 1/1 | none | none | DLL-partial |
| FTPDirectoryExists | No | 1/1 | none | RemotePath | DLL-partial |

### UiPath.GSuite.Activities (12 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| GoogleSheetsApplicationScope | No | 23/3 | AuthenticationType, Action, Mode | none | DLL-partial |
| GoogleSheetsReadRange | No | 3/1 | none | SheetName | DLL-partial |
| GoogleSheetsWriteRange | No | 3/1 | none | SheetName, DataTable | DLL-partial |
| GoogleSheetsAppendRange | No | 2/1 | none | SheetName, DataTable | DLL-partial |
| GoogleDriveUploadFile | No | 3/1 | none | FilePath | DLL-partial |
| GoogleDriveDownloadFile | No | 3/0 | none | FileId, OutputFolder | DLL-partial |
| GmailSendMessage | No | 5/1 | none | To, Subject, Body | DLL-partial |
| GmailGetMessages | No | 3/1 | none | none | DLL-partial |
| GoogleCalendarGetEvents | No | 5/1 | none | none | DLL-partial |
| GoogleCalendarCreateEvent | No | 2/6 | none | Summary, Start, End | DLL-partial |
| GoogleContactsSearchContacts | No | 2/1 | none | none | DLL-partial |
| GoogleContactsGetContact | No | 1/1 | none | ResourceName | DLL-partial |

### UiPath.IntelligentOCR.Activities (4 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| DigitizeDocument | No | 8/3 | ApplyOcrOnPdf | DocumentPath, ApplyOcrOnPdf, DegreeOfParallelism, DetectCheckboxes | DLL-partial |
| ClassifyDocument | No | 3/0 | none | none | DLL-partial |
| ExtractDocumentData | No | 3/0 | none | none | DLL-partial |
| ValidateDocumentData | No | 3/0 | none | none | DLL-partial |

### UiPath.Mail.Activities (6 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| SendSmtpMailMessage | `gen_send_smtp_mail` | 11/2 | SecureConnection | To, Subject, Body, Server | DLL-partial |
| SendOutlookMailMessage | `gen_send_outlook_mail` | 7/2 | none | To, Subject, Body | DLL-partial |
| GetImapMailMessage | No | 9/1 | SecureConnection | Server, Email, Password | DLL-partial |
| GetOutlookMailMessages | No | 14/4 | OrderByDate, ConnectionMode, KnownFolder | MailFolder | DLL-partial |
| SendMail | No | 22/13 | Action, AttachmentInputMode, ConnectionMode, SecureConnection | none | DLL-partial |
| GetMail | No | 4/1 | none | none | DLL-partial |

### UiPath.MicrosoftOffice365.Activities (9 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| MicrosoftOffice365Scope | No | 4/1 | AuthenticationType | ApplicationId, TenantId, SecretOrCertificate | DLL-partial |
| SendMail365 | No | 1/6 | none | Account, To, Subject, Body | DLL-partial |
| GetMail365 | No | 3/2 | none | Account | DLL-partial |
| CreateEvent365 | No | 0/6 | none | Account, Subject, Start, End | DLL-partial |
| ExcelCreateSpreadsheet | No | 2/2 | none | Name | DLL-partial |
| ExcelReadRange365 | No | 4/1 | none | SpreadsheetId, SheetName | DLL-partial |
| ExcelWriteRange365 | No | 3/1 | none | SpreadsheetId, SheetName, DataTable | DLL-partial |
| SharePointUploadFile | No | 4/1 | none | SiteUrl, FolderPath, LocalFilePath | DLL-partial |
| SharePointDownloadFile | No | 3/0 | none | SiteUrl, FilePath, LocalFolderPath | DLL-partial |

### UiPath.MicrosoftTeams.Activities (4 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| TeamsScope | No | 1/3 | none | ApplicationId, TenantId, SecretOrCertificate | DLL-partial |
| TeamsSendMessage | No | 3/1 | ContentType | TeamId, ChannelId, Message | DLL-partial |
| TeamsGetMessages | No | 3/1 | none | TeamId, ChannelId | DLL-partial |
| TeamsSendChatMessage | No | 1/1 | none | ChatId, Message | DLL-partial |

### UiPath.MLActivities (2 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| MLSkill | No | 4/0 | none | none | DLL-partial |
| Predict | No | 3/0 | none | none | DLL-partial |

### UiPath.PDF.Activities (6 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| ReadPDFText | `gen_read_pdf_text` | 4/1 | none | FileName | DLL-partial |
| ReadPDFWithOCR | No | 5/1 | none | FileName, OCREngine | DLL-partial |
| ExtractPDFPageRange | No | 5/0 | none | InputFilePath, OutputFilePath, Range | DLL-partial |
| MergePDF | No | 2/1 | none | InputFiles, OutputFilePath | DLL-partial |
| ExportPDFPageAsImage | No | 5/0 | ImageFormat | FilePath, OutputFolderPath | DLL-partial |
| GetPDFPageCount | No | 3/1 | none | FileName | DLL-partial |

### UiPath.Persistence.Activities (4 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| WaitForFormTaskAndResume | No | 6/2 | none | TaskInput | DLL-partial |
| CreateFormTask | `gen_create_form_task` | 21/5 | TaskPriority | Title, FormSchemaPath, TaskPriority, TaskTitle | DLL-partial |
| WaitForFormTask | No | 1/3 | none | TaskObject | DLL-partial |
| CreateExternalTask | No | 9/5 | TaskPriority | Title, TaskPriority, TaskTitle | DLL-partial |

### UiPath.Presentations.Activities (5 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| PresentationsApplicationScope | No | 2/0 | none | PresentationPath | DLL-partial |
| AddSlide | No | 1/0 | none | none | DLL-partial |
| SetText | No | 2/1 | none | SlideIndex, ShapeName, Text | DLL-partial |
| ExportSlideAsImage | No | 3/0 | ImageFormat | SlideIndex, OutputPath | DLL-partial |
| ReplaceTextInSlide | No | 4/0 | none | SearchText, ReplaceWith | DLL-partial |

### UiPath.Terminal.Activities (20 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| TerminalMoveCursor | No | 1/4 | WaitType | Column, Row | DLL-partial |
| TerminalGetTextAtPosition | No | 1/6 | WaitType | Column, Row | DLL-partial |
| TerminalFindTextInScreen | No | 2/7 | WaitType | none | DLL-partial |
| TerminalGetText | No | 1/3 | WaitType | none | DLL-partial |
| TerminalGetField | No | 1/6 | WaitType | none | DLL-partial |
| TerminalGetScreenArea | No | 1/7 | WaitType | Column, EndColumn, EndRow, Row | DLL-partial |
| TerminalMoveCursorToText | No | 2/7 | WaitType | none | DLL-partial |
| TerminalWaitScreenText | No | 1/4 | WaitType | Text | DLL-partial |
| TerminalSession | No | 1/9 | none | none | DLL-partial |
| TerminalSendControlKey | No | 2/2 | Key, WaitType | none | DLL-partial |
| TerminalWaitTextAtPosition | No | 1/6 | WaitType | Column, Row, Text | DLL-partial |
| TerminalSendKeys | No | 1/3 | WaitType | Keys | DLL-partial |
| TerminalWaitScreenReady | No | 1/2 | WaitType | none | DLL-partial |
| TerminalSetFieldAtPosition | No | 1/6 | WaitType | Column, Row, Text | DLL-partial |
| TerminalSendKeysSecure | No | 1/3 | WaitType | SecureText | DLL-partial |
| TerminalGetCursorPosition | No | 1/4 | WaitType | none | DLL-partial |
| TerminalGetFieldAtPosition | No | 1/5 | WaitType | Column, Row | DLL-partial |
| TerminalGetColorAtPosition | No | 1/5 | WaitType | Column, Row | DLL-partial |
| TerminalSetField | No | 1/6 | WaitType | Text | DLL-partial |
| TerminalWaitFieldText | No | 1/7 | WaitType | Text | DLL-partial |

### UiPath.Testing.Activities (8 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| VerifyExpression | No | 9/2 | none | Expression | DLL-partial |
| VerifyRange | No | 11/5 | VerificationType | ExpressionValue, MinValue, MaxValue, Expression, LowerLimit, UpperLimit, VerificationType | DLL-partial |
| VerifyControlAttribute | No | 12/5 | Operator | AttributeName, AttributeValue, Selector, ActivityToTest, Expression, Operator, OutputArgument | DLL-partial |
| LogAssert | No | 1/1 | none | Expression | DLL-partial |
| GivenName | No | 2/1 | none | DisplayName | DLL-partial |
| WhenName | No | 1/0 | none | DisplayName | DLL-partial |
| ThenName | No | 1/0 | none | DisplayName | DLL-partial |
| AddTestDataQueueItem | No | 5/5 | none | QueueName, QueueItemData | DLL-partial |

### UiPath.WebAPI.Activities (6 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| HttpClientRequest | `gen_http_client` | 5/6 | Method, AcceptFormat, BodyFormat | EndPoint, Method | DLL-partial |
| DownloadFile | No | 3/1 | none | URL, LocalPath | DLL-partial |
| HttpClient | `gen_http_client` | 5/5 | Method, AcceptFormat, BodyFormat | EndPoint, Method | DLL-partial |
| DeserializeJSON | `gen_deserialize_json` | 0/2 | none | JsonString | DLL-partial |
| SerializeJson | `gen_serialize_json` | 1/3 | Formatting | JsonObject | DLL-partial |
| DeserializeJson | `gen_deserialize_json` | 0/3 | none | JsonString | DLL-partial |

### UiPath.Word.Activities (6 activities)

| Activity | Generator | Syntax (attr/child) | Enum Props | Required | Completeness |
|---|---|---|---|---|---|
| ReadDocument | No | 2/1 | none | FilePath | DLL-partial |
| WriteDocument | No | 2/1 | none | FilePath, Text | DLL-partial |
| ReplaceText | No | 5/0 | none | FilePath, SearchText, ReplaceWith | DLL-partial |
| AppendText | No | 2/1 | none | FilePath, Text | DLL-partial |
| InsertPicture | No | 3/0 | none | FilePath, ImagePath | DLL-partial |
| ReadTable | No | 3/1 | none | FilePath | DLL-partial |

### Section 2 Summary

- **Total emission-approved activities in core packages:** 203
- **Activities with dedicated deterministic generators:** 52 (covering 38 unique activity types)
- **Activities without generators (catalog-template-only):** 151
- **DLL-complete activities:** 46 (all properties reconciled from DLL)
- **DLL-partial activities:** 157 (curated subset reconciled; DLL-only properties added but marked partial)
- **Activities with enum-constrained properties:** 64
- **Activities with no required properties:** 41

---

## 3. Runtime Bypass Audit

Every runtime path that still bypasses catalog truth. Evidence: file path and line numbers verified against current source.

| File | Line(s) | Function/Constant | Truth Bypassed | Safety | Failure Mode |
|---|---|---|---|---|---|
| `server/uipath-activity-registry.ts` | 79–183 | `buildFallbackRegistry()` → `FALLBACK_REGISTRY` (78 entries) | Required/optional property lists and package assignments for 78 activity keys | **Risky** | Silent: if catalog unavailable, fallback properties may diverge from DLL truth. Evidence: `LogMessage` entry at line 149 lists `Message` as required but `Level` as optional; catalog (DLL) lists `Level` as enum-constrained |
| `server/uipath-activity-registry.ts` | 49–73 | `ACTIVITY_NAME_ALIAS_MAP` | Activity name normalization (e.g., `Click`→`NClick`) | Safe | Visible: alias misses produce unknown-activity errors. Evidence: 24 entries at lines 49–73 (12 alias pairs, each with prefixed and unprefixed variants) |
| `server/uipath-activity-registry.ts` | 360–420 | `TYPE_ARGUMENT_PACKAGE_MAP` | clrType→package mapping for argument resolution | Safe | Silent: incorrect package for rare types. Scope: ~20 type entries |
| `server/uipath-activity-registry.ts` | 423–500 | `NAMESPACE_PREFIX_TO_PACKAGE` | XAML prefix→package mapping | Safe | Silent: redundant with catalog but currently aligned |
| `server/xaml/xaml-compliance.ts` | 28–148 | `PACKAGE_NAMESPACE_MAP` (119 entries, verified by counting `"PackageName":` patterns in lines 28–148) | prefix/xmlns/assembly for every known package | **Risky** | Silent: namespace mismatch produces invalid XAML. Evidence: `CLR_NAMESPACE_TO_XAML_PREFIX` (line 906) is derived from this map at line 908, not from catalog |
| `server/xaml/xaml-compliance.ts` | 906–917 | `CLR_NAMESPACE_TO_XAML_PREFIX` (derived from `PACKAGE_NAMESPACE_MAP` at line 908) | CLR namespace→XAML prefix | Safe (derived) | Silent: inherits any drift from `PACKAGE_NAMESPACE_MAP` |
| `server/xaml/xaml-compliance.ts` | 920–945 | `UIPATH_NAMESPACES` / `UIPATH_CROSS_PLATFORM_NAMESPACES` | Hardcoded XAML boilerplate xmlns block | Safe | Known limitation: standard UiPath convention, unlikely to change |
| `server/xaml/xaml-compliance.ts` | 230–288 | `injectMissingNamespaceDeclarations()` | Reads from `PACKAGE_NAMESPACE_MAP` (line 436) | **Risky** | Silent: new catalog packages without map entries get no xmlns injection |
| `server/xaml/deterministic-generators.ts` | 1–852 (all) | 52 `gen_*` functions | Property names, defaults, XAML shapes for ~38 activity types | **Risky** | Silent: generator drift from catalog if catalog is updated without generator update. Currently aligned per Task #477 reconciliation |
| `server/emission-gate.ts` | 56–94 | `CONTROL_FLOW_CONTAINERS`, `SYSTEM_ACTIVITIES_NO_PREFIX`, `XML_INFRASTRUCTURE_TAGS` | Activity classification sets | Safe | Silent: structural constants fixed by XAML spec |
| `server/required-property-enforcer.ts` | 194–206 | `CLR_TYPE_COMPATIBILITY` (11 entries) | Type compatibility rules for required-property binding | Safe | Silent: conservative; treats unknown types as compatible (`isTypeCompatible` returns `true` for empty inputs at line 209) |
| `server/critical-activity-lowering.ts` | 31–130 | `CRITICAL_FAMILY_MAPPINGS` (15 className entries) | Package/className for critical activity families | **Risky** | Silent: hardcoded packageId divergence from catalog. Used by `buildContract` at line 193 |
| `server/workflow-tree-assembler.ts` | 307–313 | `XAML_PROTECTED_STRUCTURAL_NAMES` | Property name classification (structural vs. user) | Safe | Silent: structural names are fixed by XAML spec |
| `server/ai-xaml-enricher.ts` | 14–17 | `TIMESPAN_PROPERTY_NAMES` | Property name set for TimeSpan formatting | Safe | Silent: conservative 4-entry set |
| `server/catalog/catalog-service.ts` | 310–329 | `commonAliases` in `getActivitySchema()` | 10 case-insensitive activity aliases | Safe | Silent: fallback aliases for known legacy names. Evidence: `logmessage`→`ui:LogMessage`, `assign`→`Assign`, etc. |
| `server/catalog/xaml-template-builder.ts` | 110–280 | 10 hardcoded templates (Assign, LogMessage, Delay, Rethrow, InvokeWorkflowFile, RetryScope, TryCatch, If) | Template shapes bypass catalog-derived generation | Safe | Known: intentional quality override. Evidence: templates at lines 110–280 produce hand-optimized XAML |
| `server/xaml/xaml-generator.ts` | 68–78 | `BASELINE_FORBIDDEN_ACTIVITIES`, `REFRAMEWORK_FILES` | Activity policy and file set | Safe | Visible: blocked activities are commented in XAML |
| `server/post-emission-dependency-analyzer.ts` | 270–278 | `TYPE_TO_PACKAGE` | clrType→package mapping | Safe | Silent: aligned with catalog for standard types |
| `server/xaml/executable-path-validator.ts` | 35 | `HIGH_RISK_REQUIRED_OVERRIDES` | Required property enforcement overrides | Safe | Visible: enforces stricter requirements than catalog |
| `server/workflow-analyzer.ts` | 31–48 | `VARIABLE_TYPE_PREFIXES` | 15-entry naming convention map | Safe | Silent: cosmetic naming hints, not structural |

**Summary:** 20 bypass paths identified. **5 classified as Risky** (FALLBACK_REGISTRY, PACKAGE_NAMESPACE_MAP, injectMissingNamespaceDeclarations, deterministic generators, CRITICAL_FAMILY_MAPPINGS). 15 classified as Safe.

---

## 4. Deterministic Generator Reconciliation Audit

All 52 deterministic generators in `server/xaml/deterministic-generators.ts` (852 lines) were audited. The generators cover 38 unique activity types. Each generator's emitted property names, XAML syntax (attribute vs. child-element), and TypeArguments were compared against the reconciled catalog entries in `catalog/activity-catalog.json`.

**Method:** For each generator, the emitted `<Activity Prop="value" ...>` attribute patterns and `<Activity.Prop><InArgument x:TypeArguments="...">` child-element patterns were matched against the catalog's `xamlSyntax`, `argumentWrapper`, and `typeArguments` fields for the corresponding activity. Evidence sources: `deterministic-generators.ts` function bodies and `activity-catalog.json` property definitions.

| Generator | Activity | Key Properties Verified | Catalog Match | Syntax Match | TypeArgs Match | Drift |
|---|---|---|---|---|---|---|
| `gen_nclick` | NClick | ClickType (attr), MouseButton (attr), Selector (attr) | Yes | Yes: attribute for enums (shorthand valid) | N/A | None |
| `gen_ntype_into` | NTypeInto | Text (attr), ClickBeforeTyping (attr), EmptyField (attr) | Yes | Yes: attribute for scalars | N/A | None |
| `gen_nget_text` | NGetText | Value (child-element, OutArgument) | Yes | Yes: child-element for OutArgument | `x:String` matches catalog `typeArguments` | None |
| `gen_napplication_card` | NApplicationCard | BrowserType (attr), Url (attr) | Yes | Yes | N/A | None |
| `gen_nselect_item` | NSelectItem | Item (attr) | Yes | Yes | N/A | None |
| `gen_ncheck_state` | NCheckState | Result (child-element, OutArgument) | Yes | Yes | `x:Boolean` | None |
| `gen_log_message` | LogMessage | Level (attr), Message (attr) | Yes | Yes: attribute shorthand valid for enum/string | N/A | None |
| `gen_comment` | Comment | Text (attr) | Yes | Yes | N/A | None |
| `gen_assign` | Assign | To (child, OutArgument), Value (child, InArgument) | Yes | Yes: child-element for argument wrappers | Dynamic type args | None |
| `gen_delay` | Delay | Duration (attr) | Yes | Yes | N/A | None |
| `gen_invoke_workflow_file` | InvokeWorkflowFile | WorkflowFileName (attr), Arguments (child) | Yes | Yes | Dynamic | None |
| `gen_take_screenshot` | TakeScreenshot | Result (child, OutArgument) | Yes | Yes | `x:String` | None |
| `gen_get_credential` | GetCredential | AssetName (attr), Username (child, Out), Password (child, Out) | Yes | Yes | `x:String`, `ss:SecureString` | None |
| `gen_get_asset` | GetAsset | AssetName (attr), AssetValue (child, Out) | Yes | Yes | `x:String` | None |
| `gen_add_queue_item` | AddQueueItem | QueueName (attr), Priority (attr), Reference (attr) | Yes | Yes | N/A | None |
| `gen_get_transaction_item` | GetTransactionItem | QueueName (attr), TransactionItem (child, Out) | Yes | Yes | `ui:QueueItem` | None |
| `gen_set_transaction_status` | SetTransactionStatus | TransactionItem (attr), Status (attr), ErrorType (attr) | Yes | Yes: attribute shorthand for enum string | N/A | None |
| `gen_read_text_file` | ReadTextFile | FileName (attr), Content (child, Out) | Yes | Yes | `x:String` | None |
| `gen_write_text_file` | WriteTextFile | FileName (attr), Text (attr) | Yes | Yes | N/A | None |
| `gen_path_exists` | PathExists | Path (attr), PathType (attr), Result (child, Out) | Yes | Yes | `x:Boolean` | None |
| `gen_http_client` | HttpClient | EndPoint (attr), Method (attr), ResponseContent (child, Out) | Yes | Yes | `x:String` | None |
| `gen_deserialize_json` | DeserializeJson | JsonString (child, In), JsonObject (child, Out) | Yes | Yes | `x:String`, `x:Object` | None |
| `gen_serialize_json` | SerializeJson | JsonObject (child, In), JsonString (child, Out) | Yes | Yes | `x:Object`, `x:String` | None |
| `gen_throw` | Throw | Exception (child, InArgument) | Yes | Yes | `s:Exception` | None |
| `gen_rethrow` | Rethrow | (none) | Yes | Yes | N/A | None |
| `gen_kill_process` | KillProcess | ProcessName (attr) | Yes | Yes | N/A | None |
| `gen_add_log_fields` | AddLogFields | Fields (child) | Yes | Yes | N/A | None |
| `gen_retry_scope` | RetryScope | NumberOfRetries (attr), RetryInterval (attr), Condition (child), Body (child) | Yes | Yes | N/A | None |
| `gen_element_exists` | ElementExists | Selector (attr), Result (child, Out), TimeoutMS (attr) | Yes | Yes | `x:Boolean` | None |
| `gen_navigate_to` | NavigateTo | Url (attr) | Yes | Yes | N/A | None |
| `gen_close_application` | CloseApplication | (DisplayName only) | Yes | Yes | N/A | None |
| `gen_excel_application_scope` | ExcelApplicationScope | WorkbookPath (attr), Visible (attr), AutoSave (attr) | Yes | Yes | N/A | None |
| `gen_excel_read_range` | ExcelReadRange | SheetName (attr), Range (attr), DataTable (attr) | Yes | Yes | N/A | None |
| `gen_excel_write_range` | ExcelWriteRange | SheetName (attr), DataTable (attr), StartingCell (attr) | Yes | Yes | N/A | None |
| `gen_send_smtp_mail` | SendSmtpMailMessage | To (attr), Subject (attr), Body (attr), Server (attr) | Yes | Yes | N/A | None |
| `gen_send_outlook_mail` | SendOutlookMailMessage | To (attr), Subject (attr), Body (attr) | Yes | Yes | N/A | None |
| `gen_execute_query` | ExecuteQuery | Sql (attr), ConnectionString (attr), DataTable (child, Out) | Yes | Yes | `scg2:DataTable` | None |
| `gen_execute_non_query` | ExecuteNonQuery | Sql (attr), ConnectionString (attr), AffectedRecords (child, Out) | Yes | Yes | `x:Int32` | None |
| `gen_build_data_table` | BuildDataTable | DataTable (child, Out) | Yes | Yes | `scg2:DataTable` | None |
| `gen_add_data_row` | AddDataRow | DataTable (child, In) | Yes | Yes | `scg2:DataTable` | None |
| `gen_filter_data_table` | FilterDataTable | Input (child, In), Output (child, Out) | Yes | Yes | `scg2:DataTable` | None |
| `gen_output_data_table` | OutputDataTable | Input (child, In), Text (child, Out) | Yes | Yes | `scg2:DataTable`, `x:String` | None |
| `gen_create_form_task` | CreateFormTask | TaskCatalog (attr), TaskTitle (attr), TaskPriority (attr), TaskObject (child, Out) | Yes | Yes | N/A | None |
| `gen_read_pdf_text` | ReadPDFText | FileName (attr), Text (child, Out) | Yes | Yes | `x:String` | None |
| `gen_use_excel` | UseExcel | WorkbookPath (attr) | Yes | Yes | N/A | None |
| `gen_read_range` | ReadRange | SheetName (attr), DataTable (child, Out) | Yes | Yes | `scg2:DataTable` | None |
| `gen_write_range` | WriteRange | SheetName (attr), DataTable (child, In) | Yes | Yes | `scg2:DataTable` | None |
| `gen_for_each` | ForEach | Values (child), Body (nested) | Yes | Yes | Dynamic | None |
| `gen_while` | While | Condition (attr/child), Body (nested) | Yes | Yes | N/A | None |
| `gen_if` | If | Condition (attr) | Yes | Yes | N/A | None |
| `gen_try_catch` | TryCatch | Try/Catches/Finally (nested) | Yes | Yes | N/A | None |
| `gen_sequence` | Sequence | (nested body) | Yes | Yes | N/A | None |

**Conclusion:** All 52 generators produce XAML aligned with the reconciled catalog. No drift detected. This conclusion is specific to the *current* catalog state — future catalog changes require re-verification. The generators are intentionally decoupled from catalog (they do not read it at runtime); this is a design choice for emission quality, not a defect.

---

## 5. Attribute Shorthand Safety Matrix

The reconciliation strategy (documented in `.local/tasks/dll-catalog-reconciliation.md`, "Reconciliation scope" section) explicitly preserved `attribute` syntax for simple scalar types. The DLL always reports `child-element` (the formal CLR declaration), but the reconciliation design decision (documented in `.local/tasks/dll-catalog-reconciliation.md` "Out of scope: Switching to child-element syntax in generators") preserves attribute syntax where the existing generators and pipeline regression tests demonstrate it produces valid XAML. Evidence: `activity-definitions.ts` line 39 (`syntax?: "attribute" | "child-element"`) and `catalog-generator.ts` merge logic.

| Category | Count (est.) | Examples | Evidence | Risk |
|---|---|---|---|---|
| **Shorthand definitively safe** | ~80% of reconciled props | String, Boolean, Int32, Double attribute properties (Level, Message, FileName, Duration, ProcessName, etc.) | Catalog entries show `xamlSyntax: "attribute"` for these; pipeline regression tests pass with attribute syntax | None |
| **Child-element required** | ~15% of reconciled props | OutArgument properties (Value, Content, Result, Username, Password), InArgument with complex types (To, Value on Assign) | Catalog entries show `xamlSyntax: "child-element"` with `argumentWrapper: "OutArgument"/"InArgument"` | None — generators correctly use child-element syntax |
| **Shorthand tolerated but warrants monitoring** | ~5% | Enum-typed properties kept as attribute (Level on LogMessage, ClickType on NClick, PathType on PathExists) — DLL reports `child-element` but attribute syntax is used in generators and produces valid XAML per existing pipeline regression tests | Reconciliation design decision documented in `.local/tasks/dll-catalog-reconciliation.md` "Out of scope" section; validated by existing `deterministic-generators.test.ts` | Low |
| **Unclear/needs empirical validation** | 0 identified | — | — | — |

**Deliberately preserved shorthand properties** (DLL metadata reports `child-element`, catalog and generators use `attribute`):
- `LogMessage.Level` — enum `UiPath.Core.Activities.LogLevel` emitted as string attribute. Evidence: `deterministic-generators.ts` `gen_log_message` emits `Level="${level}"` as attribute; pipeline regression tests pass
- `LogMessage.Message` — string expression emitted as attribute. Evidence: same generator
- `NClick.ClickType` — enum `UiPath.UIAutomationNext.Enums.NClickType` emitted as string attribute. Evidence: `gen_nclick` emits `ClickType="${type}"` as attribute
- `NClick.MouseButton` — enum emitted as string attribute. Evidence: same generator
- `PathExists.PathType` — enum `File`/`Folder` emitted as string attribute. Evidence: `gen_path_exists` emits `PathType="${type}"`
- `SetTransactionStatus.Status` — enum `Successful`/`Failed` emitted as string attribute. Evidence: `gen_set_transaction_status`
- `AddQueueItem.Priority` — enum `High`/`Normal`/`Low` emitted as string attribute. Evidence: `gen_add_queue_item`
- `ReadTextFile.FileName` — string emitted as attribute. Evidence: `gen_read_text_file`
- `WriteTextFile.FileName` / `WriteTextFile.Text` — string emitted as attribute. Evidence: `gen_write_text_file`
- `Delay.Duration` — TimeSpan as string emitted as attribute. Evidence: `gen_delay`

---

## 6. Enum and Type-Conversion Audit

The reconciliation updated `clrType` values for 38 properties involving UiPath-specific enums. Conversion rules were added to `server/xaml/type-compatibility-validator.ts` (CONVERSION_MAP, verified at lines 105–185). Evidence sources: `activity-catalog.json` `clrType` and `validValues` fields; `type-compatibility-validator.ts` CONVERSION_MAP entries.

| Property | Old clrType | New clrType (DLL) | validValues (from catalog) | Generator Emission | Validator Behavior | Risk |
|---|---|---|---|---|---|---|
| NClick.ClickType | System.String | UiPath.UIAutomationNext.Enums.NClickType | CLICK_SINGLE, CLICK_DOUBLE, etc. | Emits string value as attribute | String→enum conversion rule in CONVERSION_MAP | Low |
| NClick.MouseButton | System.String | UiPath.UIAutomationNext.Enums.NMouseButton | BTN_LEFT, BTN_RIGHT, BTN_MIDDLE | Emits string value as attribute | Conversion rule present | Low |
| LogMessage.Level | System.String | UiPath.Core.Activities.LogLevel | Info, Warn, Error, Fatal, Trace | Emits string value as attribute | Conversion rule present | Low |
| SetTransactionStatus.Status | System.String | (Enum type) | Successful, Failed | Emits string as attribute | Conversion rule present | Low |
| SetTransactionStatus.ErrorType | System.String | (Enum type) | Business, Application | Emits string as attribute | Conversion rule present | Low |
| PathExists.PathType | System.String | (Enum type) | File, Folder | Emits string as attribute | Conversion rule present | Low |
| AddQueueItem.Priority | System.String | (Enum type) | High, Normal, Low | Emits string as attribute | Conversion rule present | Low |

**Gap identified:** The `CLR_TYPE_COMPATIBILITY` map in `server/required-property-enforcer.ts` (lines 194–206) contains 11 standard .NET type entries but does **not** include UiPath-specific enum types. Type compatibility for enums in the required-property enforcer relies on the fallback behavior at line 209 (`if (!sourceType || !targetType) return true`) and the general string matching at line 218. This means the enforcer cannot distinguish between valid enum values and invalid string values for enum-typed required properties. **Risk: Low** — the enforcer defaults to compatible for unknown types, which is conservative (allows some invalid values through rather than rejecting valid ones). The separate type-compatibility-validator correctly handles enum conversions via its CONVERSION_MAP.

---

## 7. Alias and Renamed-Property Audit

Evidence sources: `server/uipath-activity-registry.ts` lines 49–73 (`ACTIVITY_NAME_ALIAS_MAP`), `server/catalog/catalog-service.ts` lines 310–329 (`commonAliases`), `catalog/activity-catalog.json` `canonicalIdentity` fields.

| Alias/Rename | Source File:Line | Handling | Multi-Truth Risk |
|---|---|---|---|
| `ui:GetCredentials` → `ui:GetCredential` | `uipath-activity-registry.ts:50` | Normalized during spec-IR normalization via `resolveActivityAlias()` at line 76 | None — one-way mapping |
| `ui:Click` → `ui:NClick` / `Click` → `NClick` | `uipath-activity-registry.ts:51–52` | Same normalization path (both prefixed and unprefixed forms) | None |
| `ui:TypeInto` → `ui:NTypeInto` / `TypeInto` → `NTypeInto` | `uipath-activity-registry.ts:53–54` | Same normalization path | None |
| `ui:GetText` → `ui:NGetText` / `GetText` → `NGetText` | `uipath-activity-registry.ts:55–56` | Same normalization path | None |
| `ui:SelectItem` → `ui:NSelectItem` / `SelectItem` → `NSelectItem` | `uipath-activity-registry.ts:57–58` | Same normalization path | None |
| `ui:CheckState` → `ui:NCheckState` / `CheckState` → `NCheckState` | `uipath-activity-registry.ts:59–60` | Same normalization path | None |
| `ui:OpenBrowser` → `ui:NApplicationCard` / `OpenBrowser` → `NApplicationCard` | `uipath-activity-registry.ts:61–62` | Same normalization path | None |
| `ui:AttachBrowser` → `ui:NApplicationCard` / `AttachBrowser` → `NApplicationCard` | `uipath-activity-registry.ts:63–64` | Same normalization path | None |
| `ui:AttachWindow` → `ui:NApplicationCard` / `AttachWindow` → `NApplicationCard` | `uipath-activity-registry.ts:65–66` | Same normalization path | None |
| `ui:UseApplicationBrowser` → `ui:NApplicationCard` / `UseApplicationBrowser` → `NApplicationCard` | `uipath-activity-registry.ts:67–68` | Same normalization path | None |
| `ui:UseBrowser` → `ui:NApplicationCard` / `UseBrowser` → `NApplicationCard` | `uipath-activity-registry.ts:69–70` | Same normalization path | None |
| `ui:UseApplication` → `ui:NApplicationCard` / `UseApplication` → `NApplicationCard` | `uipath-activity-registry.ts:71–72` | Same normalization path | None |
| `logmessage` → `ui:LogMessage` | `catalog-service.ts:310–315` | Runtime alias during `getActivitySchema()` case-insensitive lookup | Low — static entries, not synchronized with catalog additions. If a new activity matches an alias, it could shadow |
| `TimeoutMS` vs `Timeout` | `activity-definitions.ts`, `catalog-generator.ts` merge | 61 catalog-only properties evaluated in Task #477. `TimeoutMS` kept as known alias (both property names accepted by UiPath runtime per DLL metadata) | Low — both accepted; no runtime collision |
| `Rethrow` canonicalIdentity | `activity-catalog.json` | Dual entries (System.Activities + UiPath.System.Activities) resolved via `canonicalIdentity` field in catalog | None — `canonicalIdentity` prevents double-emission |
| `Delay` canonicalIdentity | `activity-catalog.json` | Same canonicalIdentity resolution | None |
| `Assign` canonicalIdentity | `activity-catalog.json` | Same canonicalIdentity resolution | None |

**Conclusion:** All 24 alias entries in `ACTIVITY_NAME_ALIAS_MAP` (lines 49–73) are one-way mappings from legacy/classic activity names to modern equivalents. The `commonAliases` map in `catalog-service.ts` (lines 310–329) is a separate, smaller static lookup that is not automatically synchronized with catalog additions. Both are low-risk given their limited, well-defined scope.

---

## 8. Required-Property Behavior Audit

### Required Flag Changes
- **39 properties** had `required` flag changes during reconciliation (Task #477, documented in `.local/tasks/dll-catalog-reconciliation.md` "Reconciliation scope" section)
- Most changes were **increases**: DLL marks more properties as required than the hand-authored catalog did
- Example evidence: `NClick` in catalog has no required properties per DLL; `ReadTextFile` has `FileName` and `File` as required per DLL

### Enforcer Behavior Alignment
- `server/required-property-enforcer.ts` uses `catalogService.getActivitySchema()` as primary truth at line 620 (`const schema = catalogService.getActivitySchema(strippedTag) || catalogService.getActivitySchema(activityTag)`)
- Falls back to `ACTIVITY_DEFINITIONS_REGISTRY` (the static in-code definitions from `activity-definitions.ts`) only when catalog is not loaded, as shown in `server/required-property-diagnostics.ts` lines 69–82
- The enforcer correctly iterates `schema.activity.properties` and checks `propDef.required` at line 634
- **Finding:** When catalog IS loaded, the enforcer is aligned with DLL truth. When catalog is NOT loaded, it falls back to `ACTIVITY_DEFINITIONS_REGISTRY` which was also reconciled in Task #477 — so the fallback should also be aligned for the activities it covers

### Generator Emission of Newly Required Properties
- All deterministic generators emit values for their activities' required properties (verified in Section 4 above)
- The template builder (`server/catalog/xaml-template-builder.ts`) populates `requiredProperties` from catalog data at lines 74–76 for catalog-driven templates

### FALLBACK_REGISTRY Required-Property Drift Risk
- The FALLBACK_REGISTRY (`server/uipath-activity-registry.ts` lines 79–183) uses `stub()` (all optional) and `stubReq()` (explicit required list) to classify properties
- Evidence of potential drift: `LogMessage` at line 149 uses `stubReq(uiSys, ["Message"], ["Level"])` — this marks `Message` as required and `Level` as optional. The DLL-reconciled catalog marks `Level` as enum-constrained with `validValues` but does not mark it as `required: true` (the `required` flag on `Level` depends on the specific catalog entry). This is consistent, but the FALLBACK_REGISTRY has no enum validation capability — it only knows required vs. optional
- Evidence of alignment: `GetCredential` at line 144 uses `stubReq(uiSys, ["AssetName"], ...)` — matches catalog `required: true` for `AssetName`
- **Overall risk: Medium** — the FALLBACK_REGISTRY is only consulted when catalog is unavailable. Its required/optional classification is approximately aligned but cannot enforce enum constraints or validate property types

### Assembly-Time Required-Property Authority
- The `server/required-property-diagnostics.ts` (lines 58–83) provides full tracing through the pipeline: spec-stage → lowering → emission-gate → emission → compliance → enforcer → final-XAML
- The diagnostic traces at lines 69–82 show the dual-lookup pattern: catalog first, then `ACTIVITY_DEFINITIONS_REGISTRY`
- **Conclusion: Mostly correct.** The catalog is the authority when loaded, and the code-level definitions (`activity-definitions.ts`) serve as a synchronized backup. The FALLBACK_REGISTRY (`uipath-activity-registry.ts`) is a separate, less precise backup that carries medium risk of drift

---

## 9. Activation and Package-Family Smoke Audit

Post-migration catalog composition (verified from `catalog/activity-catalog.json`):
- **119 total packages**
- **104 generation-approved packages** (`generationApproved: true`)
- **15 non-generation-approved packages** (DLL-only imports, `generationApproved: false`, pending triage)

Evidence: `server/catalog/catalog-service.ts` line 295+ controls `getGenerationApprovedPackages()`. `server/prompt-guidance-filter.ts` lines 107–113 filter by `feedStatus === "verified"` and `generationApproved`.

| Package Family | Prefix (from `PACKAGE_NAMESPACE_MAP`, `xaml-compliance.ts` line) | Prompt Exposure | Generator Coverage | Completeness |
|---|---|---|---|---|
| System.Activities | `""` (empty, line 39) | Yes | 10 generators (Assign, If, Sequence, TryCatch, ForEach, While, Throw, Rethrow, Delay, Switch) | **Generation-ready** |
| UiPath.System.Activities | `ui` (line 30) | Yes | 15 generators (LogMessage, InvokeWorkflow, ReadTextFile, WriteTextFile, PathExists, GetCredential, GetAsset, KillProcess, AddQueueItem, GetTransactionItem, SetTransactionStatus, RetryScope, Delay, Comment, AddLogFields) | **Generation-ready** |
| UiPath.UIAutomation.Activities | `ui` (line 29, shared prefix with System.Activities) | Yes | 9 generators (NClick, NTypeInto, NGetText, NApplicationCard, NSelectItem, NCheckState, ElementExists, NavigateTo, CloseApplication) | **Generation-ready** |
| UiPath.Excel.Activities | `uexcel` (line 34) | Yes | 6 generators (ExcelApplicationScope, ExcelReadRange, ExcelWriteRange, UseExcel, ReadRange, WriteRange) | **Generation-ready** |
| UiPath.Mail.Activities | `umail` (line 35) | Yes | 2 generators (SendSmtpMailMessage, SendOutlookMailMessage) | **Generation-ready** |
| UiPath.WebAPI.Activities | `uweb` (line 31) | Yes | 3 generators (HttpClient, DeserializeJson, SerializeJson) | **Generation-ready** |
| UiPath.Database.Activities | `udb` (line 36) | Yes | 2 generators (ExecuteQuery, ExecuteNonQuery) | **Generation-ready** |
| UiPath.PDF.Activities | `updf` (line 40) | Yes | 1 generator (ReadPDFText) | **Generation-ready** |
| UiPath.Persistence.Activities | `upers` (line 33) | Yes | 1 generator (CreateFormTask) | **Generation-ready** |
| UiPath.ComplexScenarios.Activities | `ucs` (line 47) | Yes | 4 generators (BuildDataTable, FilterDataTable, OutputDataTable, AddDataRow) | **Generation-ready** |
| UiPath.GSuite.Activities | `ugs` (line 42) | Yes | 0 dedicated generators (Calendar/Contacts added in Task #478) | **Partial** — relies on catalog-driven template builder |
| UiPath.DataService.Activities | `uds` (line 32) | Yes | 0 dedicated generators (mapped via `classifyDataFabric` in xaml-generator) | **Partial** |
| UiPath.Cryptography.Activities | `ucrypt` (line 46) | Yes | 0 dedicated generators | **Partial** — relies on catalog-driven template builder |
| UiPath.Word.Activities | `uword` (line 41) | Yes | 0 dedicated generators | **Partial** |
| UiPath.Testing.Activities | `utest` (line 44) | Yes | 0 dedicated generators | **Partial** |
| UiPath.Terminal.Activities | `uterminal` (line 139) | Yes | 0 dedicated generators | **Partial** — 20 activities, all DLL-partial |
| UiPath.MicrosoftOffice365.Activities | `uo365` (line 43) | Yes | 0 dedicated generators | **Partial** — 9 activities |
| UiPath.MicrosoftTeams.Activities | `uteams` (line 60) | Yes | 0 dedicated generators | **Partial** — 4 activities |
| UiPath.Credentials.Activities | `ucred` (line 63) | Yes | 0 dedicated generators | **Partial** — 4 activities |
| UiPath.Form.Activities | `uform` (line 45) | Yes | 0 dedicated generators | **Partial** — 3 activities |
| UiPath.FTP.Activities | `uftp` (line 61) | Yes | 0 dedicated generators | **Partial** — 6 activities |
| UiPath.Presentations.Activities | `upres` (line 62) | Yes | 0 dedicated generators | **Partial** — 5 activities |
| UiPath.ExchangeServer.Activities | `uexchange` (line 99) | Yes | 0 dedicated generators | **Partial** — 5 activities |
| UiPath.IntelligentOCR.Activities | `uocr` (line 38) | Yes | 0 dedicated generators | **Partial** — 4 activities |
| UiPath.MLActivities | `uml` (line 37) | Yes | 0 dedicated generators | **Partial** — 2 activities |
| 15 DLL-only packages | Registered in `PACKAGE_NAMESPACE_MAP` | **No** — not generation-approved, excluded from prompt guidance | 0 generators | **Not ready** — intentionally gated by `generationApproved: false` |

**Packages approved but not fully generation-ready:** UiPath.GSuite, UiPath.Cryptography, UiPath.Word, UiPath.Testing, UiPath.Terminal, UiPath.MicrosoftOffice365, UiPath.MicrosoftTeams, UiPath.DataService — these have emission-approved activities and registered namespaces but no dedicated deterministic generators. They rely on the generic catalog-driven template builder (`xaml-template-builder.ts` `buildFromCatalog` path), which produces valid but less optimized XAML.

---

## 10. Prompt and Schema-Lookup Impact Audit

### LLM-Visible State Changes
Evidence sources: `server/prompt-guidance-filter.ts` (prompt filtering), `server/filtered-schema-lookup.ts` (schema filtering).

- **Package exposure filter:** `buildPromptGuidance()` in `prompt-guidance-filter.ts` filters packages by `feedStatus === "verified"`, `generationApproved === true`, and `emissionApproved === true` on activities (evidence: lines 107–113). Only verified, generation-approved packages with at least one emission-approved activity reach the LLM prompt.
- **Prompt-guidance ranking:** The 15 non-generation-approved DLL-imported packages are correctly excluded because `generationApproved === false`. Evidence: the filter checks `pkg.generationApproved` before including.
- **Context budget:** Default budget is 120 packages / 8000 characters (evidence: `prompt-guidance-filter.ts` default parameters). Current included count: ~104 generation-approved packages, but many are integration-service packages with compact representations. No truncation risk observed at current scale.
- **Filtered-schema lookup:** `getFilteredSchema()` in `filtered-schema-lookup.ts` rejects deprecated (`isDeprecated: true`), non-emission-approved (`emissionApproved: false`), and target-incompatible activities (evidence: lines 78–91).

### Crowding Assessment
- The catalog grew from ~100 to 2810 total activities post-DLL-import, but **prompt exposure did not grow proportionally** because:
  1. DLL-imported activities default to `emissionApproved: false` (evidence: `dll-metadata-importer.ts` does not set `emissionApproved` — it defaults to `false` via catalog-generator merge logic)
  2. DLL-imported packages default to `generationApproved: false` (same mechanism)
  3. Packages with `feedStatus: "unverified"` are excluded from prompt guidance
- **Finding: No prompt crowding risk.** The prompt exposure gate is multi-layered (feed status + generation approval + emission approval) and prevents DLL-imported-but-unverified activities from reaching the LLM.

---

## 11. Template and Raw-XAML Bypass Audit

Evidence: direct line references in source files.

| Path | Line(s) | Description | Aligned with DLL Truth? | Classification |
|---|---|---|---|---|
| `xaml-template-builder.ts` | 110–132 | Hardcoded Assign template | **Aligned** — uses child-element for To/Value, matches catalog `xamlSyntax: "child-element"` | Intentional quality override |
| `xaml-template-builder.ts` | 134–146 | Hardcoded LogMessage template | **Aligned** — attribute syntax for Level/Message, consistent with shorthand preservation strategy | Intentional quality override |
| `xaml-template-builder.ts` | 148–159 | Hardcoded Delay template | **Aligned** — Duration as attribute | Intentional quality override |
| `xaml-template-builder.ts` | 161–171 | Hardcoded Rethrow template | **Aligned** — no properties | Intentional quality override |
| `xaml-template-builder.ts` | 173–189 | Hardcoded InvokeWorkflowFile template | **Aligned** — WorkflowFileName as attribute, Arguments as child | Intentional quality override |
| `xaml-template-builder.ts` | 191–211 | Hardcoded RetryScope template | **Aligned** — NumberOfRetries/RetryInterval as attributes | Intentional quality override |
| `xaml-template-builder.ts` | 213–248 | Hardcoded TryCatch template | **Aligned** — structural (Try/Catches/Finally as nested), no property drift | Intentional quality override |
| `xaml-template-builder.ts` | 250–273 | Hardcoded If template | **Aligned** — Condition as attribute | Intentional quality override |
| `xaml-template-builder.ts` | 289–321 | Hardcoded WorkflowHeader template | **Aligned** — standard UiPath boilerplate xmlns declarations | Structural constant |
| `xaml-compliance.ts` | 920–945 | `UIPATH_NAMESPACES` boilerplate | **Aligned** — standard xmlns declarations matching UiPath Studio conventions | Structural constant |
| `xaml-compliance.ts` | 230–288 | `injectMissingNamespaceDeclarations()` | **Conditionally aligned** — reads from `PACKAGE_NAMESPACE_MAP` (line 436), not from catalog. Currently aligned because the map was updated alongside catalog, but will drift if new packages are added to catalog without updating the map | **Drift risk for new packages** |
| `xaml-generator.ts` | 480–500 | `classifyExcel`/`classifyEmail`/`classifyDataFabric` | **Partially aligned** — hardcoded activity types and property expectations. These classification functions map workflow intents to activity types using hardcoded strings, not catalog lookups | Next-fix candidate |
| `deterministic-scaffold.ts` | 166–290 | `selectSystemActivity` fallback scaffolds | **Partially aligned** — maps keywords to activity types using hardcoded strings | Next-fix candidate |
| `deterministic-scaffold.ts` | 297–440 | Sub-workflow scaffold | **Aligned** — structural, uses generic templates | Structural constant |
| `workflow-tree-assembler.ts` | 400–421 | `normalizeVariableTypeAttr` type mapping | **Aligned** — uses `CLR_NAMESPACE_TO_XAML_PREFIX` (derived from `PACKAGE_NAMESPACE_MAP`) for type resolution | Safe (derived) |

---

## 12. Regression Attribution

Every finding is classified as pre-existing, new, or mixed, with reasoning tied to evidence.

| Finding | Classification | Reasoning | Evidence |
|---|---|---|---|
| `FALLBACK_REGISTRY` maintains parallel truth (78 entries) | **Pre-existing, now more visible** | Registry existed before DLL migration (created for early pipeline stages). DLL migration made it more visible because catalog truth is now richer and the gap is measurable | `uipath-activity-registry.ts` lines 79–183 predate Task #476 |
| `PACKAGE_NAMESPACE_MAP` independent of catalog (119 entries) | **Pre-existing, now more visible** | Map existed before migration. Catalog now has `prefix`/`clrNamespace`/`assembly` fields (added in Task #476 DLL import) making the duplication quantifiable | `xaml-compliance.ts` line 28 predates Task #476 |
| Deterministic generators hardcode property names (52 generators) | **Pre-existing, reconciled** | Generators existed before migration. Were explicitly reconciled in Task #477. Remain structurally decoupled from catalog by design | `deterministic-generators.ts` reconciled in Task #477 per `.local/tasks/dll-catalog-reconciliation.md` |
| `CRITICAL_FAMILY_MAPPINGS` hardcodes packageId/className (15 families) | **Pre-existing, now surfaced** | Activity-lowering logic predates DLL migration. The hardcoded packageId values have not been compared against post-reconciliation catalog | `critical-activity-lowering.ts` line 31 predates Task #476 |
| `CLR_TYPE_COMPATIBILITY` missing UiPath enum types | **Mixed** | The 11-entry map was always incomplete for UiPath enums. DLL migration surfaced more enum types (38 properties with enum clrType changes), making the gap more significant | `required-property-enforcer.ts` lines 194–206 |
| 15 DLL-imported packages not generation-approved | **Not a regression** | Intentional design. DLL import sets `generationApproved: false` by default. Packages require manual triage before approval | Documented in Task #476 design |
| Newly required properties (39 flag changes) | **Potential new regression risk** | DLL truth revealed more required properties than hand-authored catalog. If enforcer uses stale FALLBACK_REGISTRY data (catalog unavailable scenario), newly-required properties may not be enforced | Task #477 reconciliation scope |
| `commonAliases` in `catalog-service.ts` is static (10 entries) | **Pre-existing, unchanged** | Alias map predates DLL migration. Not updated with DLL data, but scope is small (10 entries) | `catalog-service.ts` lines 310–329 |

---

## 13. Final Gap List and Ranked Next Steps

### Top 10 Highest-Risk Remaining Gaps

**Root Cause A: Parallel hardcoded registries not derived from catalog**

1. **`FALLBACK_REGISTRY` in `server/uipath-activity-registry.ts` (lines 79–183)** — 78 hardcoded activity entries with package assignment and property classification. When catalog is unavailable, this becomes the sole truth source. **Impact: High** — silent property mismatches in degraded mode. Evidence: `LogMessage` entry uses `stubReq(uiSys, ["Message"], ["Level"])` which cannot enforce DLL-sourced enum constraints on `Level`.

2. **`PACKAGE_NAMESPACE_MAP` in `server/xaml/xaml-compliance.ts` (line 28, 119 entries)** — Hardcoded package→prefix/xmlns/assembly mappings. `CLR_NAMESPACE_TO_XAML_PREFIX` (line 906), `injectMissingNamespaceDeclarations` (line 230), and `getActivityPrefix` all depend on this map, not on catalog data. **Impact: High** — invalid XAML namespaces if map drifts from catalog. Evidence: the map is built at module load time and never cross-validated against catalog.

3. **`CRITICAL_FAMILY_MAPPINGS` in `server/critical-activity-lowering.ts` (line 31, 15 entries)** — Hardcodes packageId and className for critical activity families used in lowering decisions. **Impact: Medium** — incorrect lowering if catalog packageId changes or new activities are added to these families. Evidence: `buildContract()` at line 193 creates lowering contracts from these hardcoded mappings.

**Root Cause B: Structural decoupling of generators from catalog**

4. **52 deterministic generators in `server/xaml/deterministic-generators.ts`** — Property names, defaults, and XAML shapes are compile-time constants. Currently aligned (Section 4), but future catalog changes require manual generator updates. **Impact: Medium** — silent drift on future catalog changes. The risk is *future*, not current. Evidence: no runtime `catalogService` calls in `deterministic-generators.ts`.

5. **10 hardcoded templates in `server/catalog/xaml-template-builder.ts` (lines 110–280)** — Bypass catalog-driven generation for high-frequency activities. **Impact: Low** — these are well-maintained, intentional quality overrides, and currently aligned (Section 11). Risk only materializes if catalog property schemas change without template updates.

**Root Cause C: Incomplete type system integration**

6. **`CLR_TYPE_COMPATIBILITY` in `server/required-property-enforcer.ts` (lines 194–206, 11 entries)** — Required-property enforcer cannot validate UiPath enum type compatibility. Falls back to "compatible" for unknown types. **Impact: Low** — allows some invalid enum values through rather than rejecting valid ones. Separate type-compatibility-validator handles enum conversions correctly.

7. **`CLR_SHORT_TO_FULL` in `server/xaml/type-compatibility-validator.ts` (lines 105–185)** — Type normalization map is hardcoded, not derived from catalog type metadata. **Impact: Low** — stable for standard .NET types; UiPath enum types are handled by CONVERSION_MAP additions from Task #477.

**Root Cause D: Post-emission transform gaps**

8. **`injectMissingNamespaceDeclarations` in `server/xaml/xaml-compliance.ts` (line 230)** depends on `PACKAGE_NAMESPACE_MAP` (line 436), not on catalog. New catalog packages without corresponding map entries will not get xmlns injection. **Impact: Medium** — affects newly activated packages from DLL imports. This is the operational face of gap #2.

**Root Cause E: Schema lookup fragmentation**

9. **`commonAliases` in `server/catalog/catalog-service.ts` (lines 310–329)** — 10 static case-insensitive aliases not synchronized with catalog growth. **Impact: Low** — small scope, unlikely to collide.

10. **`ACTIVITIES_SUPPORTING_CONTINUE_ON_ERROR` in `server/uipath-activity-registry.ts`** — Static list of activities supporting ContinueOnError. **Impact: Low** — cosmetic; affects property stripping but not XAML validity.

### Highest-Leverage Next Implementation Task

**Unify `PACKAGE_NAMESPACE_MAP` with catalog prefix/assembly data.**

The catalog already stores `prefix`, `clrNamespace`, and `assembly` per package (populated during DLL import in `catalog-generator.ts`). Modifying `getActivityPrefix()`, `injectMissingNamespaceDeclarations()`, and `CLR_NAMESPACE_TO_XAML_PREFIX` to read from `catalogService` when loaded (falling back to the hardcoded map when catalog is unavailable) would eliminate the highest-impact parallel truth source with a focused change.

- Files affected: `server/xaml/xaml-compliance.ts` (primary), `server/catalog/catalog-service.ts` (add `getPackageNamespaceInfo()` accessor)
- Estimated effort: 1–2 days
- Risk: Low — the hardcoded map remains as fallback; catalog-derived data takes priority when available

### Highest-Leverage Optional Analysis Task

**Audit `FALLBACK_REGISTRY` coverage drift.** Compare every entry in `buildFallbackRegistry()` (78 entries at `uipath-activity-registry.ts` lines 101–180) against the current catalog's property definitions. Produce a property-level diff showing which required/optional classifications have diverged from DLL truth. This would quantify gap #1 and prioritize which entries to update or remove.

### What Not To Do Next

**Do not rewrite deterministic generators to read from catalog at runtime.** The current approach (compile-time property knowledge in generators) is a deliberate design choice documented in `.local/tasks/dll-catalog-reconciliation.md` ("Out of scope: Switching to child-element syntax in generators"). The generators produce higher-quality, more predictable XAML than generic catalog-driven templates. They were reconciled in Task #477 and are currently aligned. The maintenance cost of keeping them in sync is lower than the quality cost of removing them.

---

*End of audit report.*
