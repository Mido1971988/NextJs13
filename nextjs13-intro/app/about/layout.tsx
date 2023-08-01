export default function AboutLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
        return (
        <>
            <nav>Navbar from About Layout.tsx</nav>
            <main>{children}</main>
        </>
        )
}