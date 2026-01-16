type ToastProps = {
  text: string | null;
};

export function Toast({ text }: ToastProps) {
  if (!text) return null;
  return <div className="toast">{text}</div>;
}
