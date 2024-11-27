export function CurrentWeather({cityName}: {cityName: string | undefined}) {

    return (
        <div className="border-4 h-[400px] w-[600px] rounded-3xl">
            <div>
                <h3>Погода в городе {cityName}</h3>
            </div>
            <div></div>
        </div>
    );
}