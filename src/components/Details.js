import React from "react"

function Details(props) {
    return (
        <div className="details">
            <div className="details__img">
                <img src = {props.songs.img_src} alt="" />

            </div>
            <h3 className="details__title">{props.songs.title}</h3>
            <h3 className="details__artist">{props.songs.artist}</h3>

        </div>
    )
}

export default Details;