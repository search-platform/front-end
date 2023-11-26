export function cleanChatMessage(message: string) {
  return message
    .replaceAll('\n', '')
    .replaceAll('\t', '')
    .replaceAll('```', '')
    .replaceAll('json', '');
}
