interface IBorderCountries {
    countries: string[]
}

export default function BorderCountries(props: IBorderCountries){
    console.log(props.countries)
    return(
        <>
            <div>
                <h2>Border countries: </h2>
                <div>
                    {
                        props.countries?.map((element: string) => {
                            return(
                                <span>{element}</span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}