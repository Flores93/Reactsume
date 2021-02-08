import ChipsSection from "../components/ui/ChipsSection"

export const getHobbies = (data) => {
    return data.map((data) => (
        <ChipsSection key={data.id} {...data} />
    ))
}