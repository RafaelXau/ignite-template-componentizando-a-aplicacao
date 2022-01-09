
interface ContainerProps {
    children: React.ReactElement[]
}
export function Container({ children }: ContainerProps) {
    return <div style={{ display: 'flex', flexDirection: 'row' }}>{children}</div>
}