// DDI+DDD+número, sem formatação.
export const WHATSAPP_NUMBER = "556192355047"

export const DEFAULT_WA_MESSAGE = "Olá! Vim pelo site da Dev Team Tech e quero falar sobre um projeto."

export function waLink(message?: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || DEFAULT_WA_MESSAGE)}`
}
