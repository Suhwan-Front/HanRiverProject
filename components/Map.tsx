const Map = () => {
    return(
        <div>
            <div id='map' style={{width: '100%'}}></div>
            <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&callback=initMap`} async />
        </div>
    )
}

export default Map