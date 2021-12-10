import { ContentProps } from "./Content"

interface TotalProps {
    data: ContentProps[];
}
export const Total = (props: TotalProps) => {
    return (
        <div>
            Number of exercises{" "}
            {props.data.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </div>
    )
}

