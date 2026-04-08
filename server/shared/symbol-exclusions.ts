export const VB_EXPRESSION_KEYWORDS = new Set([
  "True", "False", "Nothing", "null", "New", "Not", "And", "Or", "If",
  "Then", "Else", "ElseIf", "End", "Select", "Case", "For", "Each", "Next",
  "While", "Do", "Loop", "Until", "To", "Step", "In", "Throw", "Try",
  "Catch", "Finally", "Dim", "As", "Of", "Imports", "Return", "Exit",
  "Continue", "Me", "MyBase", "MyClass", "Is", "IsNot", "Like", "Mod",
  "AndAlso", "OrElse", "Xor", "With", "Using",
  "ByVal", "ByRef", "Optional", "AddressOf", "RaiseEvent",
  "String", "Integer", "Boolean", "DateTime", "Object", "Double", "Decimal",
  "Date", "Byte", "Short", "Long", "Single", "Char", "SByte", "UShort",
  "UInteger", "ULong",
  "CStr", "CInt", "CBool", "CDbl", "CDec", "CDate", "CLng", "CSng", "CType",
  "CObj", "CByte", "CChar", "CSByte", "CShort", "CUInt", "CULng", "CUShort",
  "GetType", "TypeOf", "DirectCast", "TryCast",
  "Len", "Mid", "Left", "Right", "Trim", "UCase", "LCase", "InStr", "Replace",
  "Split", "Join", "Val", "Str", "Chr", "Asc", "Format", "FormatNumber",
  "IsNumeric", "IsDate", "IsArray", "IsNothing", "IsDBNull",
  "Now", "Today", "TimeOfDay", "DateAdd", "DateDiff", "DatePart",
  "Year", "Month", "Day", "Hour", "Minute", "Second",
  "Abs", "Int", "Fix", "Round", "Rnd", "Sgn", "Sqr", "IIf", "Choose",
  "MsgBox", "InputBox", "NameOf",
  "Math", "Convert", "Environment", "System", "Console",
  "TimeSpan", "Array", "Type", "Exception",
]);

export const CLR_TYPE_NAMESPACE_NAMES = new Set([
  "HttpClient", "Newtonsoft", "JObject", "JArray", "JToken", "JValue",
  "Regex", "Match", "StringBuilder", "StreamReader", "StreamWriter",
  "File", "Path", "Directory", "Uri", "WebClient", "HttpWebRequest",
  "DataTable", "DataRow", "DataColumn", "DataSet",
  "List", "Dictionary", "HashSet", "Queue", "Stack",
  "Task", "Thread", "Guid", "Decimal", "Double", "Single",
  "Int16", "Int32", "Int64", "Byte", "Char", "Object",
  "Information", "Trace", "Warning", "Error",
  "Json", "Xml", "Linq", "Text", "IO", "Net", "Threading",
  "Globalization", "Collections", "Generic", "Runtime",
  "Serialization", "Configuration", "ComponentModel",
  "Encoding", "StringComparer", "TimeZoneInfo", "SecureString", "NetworkCredential",
  "Activator", "Enumerable", "Queryable", "CancellationToken",
  "JsonConvert", "Process", "Monitor", "Interlocked",
  "MailMessage", "SmtpClient", "XDocument", "XElement", "XmlDocument",
  "BitConverter", "Buffer",
]);

export const XML_ENTITY_NAMES = new Set(["gt", "lt", "amp", "quot", "apos"]);

export const VB_EXPRESSION_KEYWORDS_LOWER = new Set(
  [...VB_EXPRESSION_KEYWORDS].map(k => k.toLowerCase())
);
export const CLR_TYPE_NAMESPACE_NAMES_LOWER = new Set(
  [...CLR_TYPE_NAMESPACE_NAMES].map(k => k.toLowerCase())
);
export const XML_ENTITY_NAMES_LOWER = new Set(
  [...XML_ENTITY_NAMES].map(k => k.toLowerCase())
);

export function isExcludedSymbolToken(ident: string): boolean {
  const lower = ident.toLowerCase();
  return VB_EXPRESSION_KEYWORDS_LOWER.has(lower)
    || CLR_TYPE_NAMESPACE_NAMES_LOWER.has(lower)
    || XML_ENTITY_NAMES_LOWER.has(lower);
}
