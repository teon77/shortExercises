


export const Total = (props: TotalProps) => {
    return (
        <div>
            Number of exercises{" "}
            {props.data.reduce((element, element2) => element + element2.exerciseCount, 0)}
        </div>
    )
}

