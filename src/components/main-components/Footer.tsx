export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm fixed bottom-0 w-full bg-background">
      © {new Date().getFullYear()} Tech Blog
    </footer>
  );
}
