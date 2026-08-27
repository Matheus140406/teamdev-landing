import WhatsAppLink from "@/components/ui/WhatsAppLink"

export default function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <WhatsAppLink className="wa-float" message={message} aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.5h0a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.6.9 1-3.5-.2-.4A9.5 9.5 0 1 1 12 21.5m0-20.9A11.4 11.4 0 0 0 2.1 17.6L.6 23.4l5.9-1.5A11.4 11.4 0 1 0 12 .6" />
      </svg>
      WhatsApp
    </WhatsAppLink>
  )
}
