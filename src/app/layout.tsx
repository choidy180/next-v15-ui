import "./globals.css";
import Providers from "./provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`w-full min-h-screen flex flex-col justify-start items-center`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
