const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='icons/thunderstorms-rain.svg'
            console.log("tormenta");
            break;
        case 'Drizzle':
            icon='icon/drizzle.svg'
            console.log('LLovizna');
            break;
        case 'Rain':
            icon='icons/rain.svg'
            console.log('Lluvia');
            break;
        case 'Snow':
            icon='icons/snowy.svg'
            console.log('Nieve');
            break;
        case 'Clear':
            icon='icons/clear-day.svg'
            console.log('Limpio');
            break;
        case 'Atmosphere':
            icon='icons/weather.svg'
            console.log('Atmosfera');
            break;
        case 'Clouds':
            icon='icons/fog.svg'
            console.log('Nubes');
            break;
        case 'Fog':
            icon='icons/fog.svg'
            console.log('Nubes');
            break;
        case 'Haze':
            icon='icons/haze.svg'
            console.log('Brumas');
            break;
        case 'Smoke':
            icon='icons/smoke.svg'
            console.log('Humo');
            break;
        
        default:
            icon='icons/clear-day.svg'
            console.log("Limpio")
            break;
    }
    return icon
}

export default Icons