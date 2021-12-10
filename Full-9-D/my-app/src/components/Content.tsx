export interface ContentProps {
    name: string;
    exerciseCount: number;
}

export const Content = (props: ContentProps) => {
    return (
        <p>{props.name} {props.exerciseCount }</p>
    )
}

