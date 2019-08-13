import React from 'react'
import Avatar from 'avataaars'


const Headshot = (props) => {
    
    const styles = {

    }

    return(
        <div style={styles}>
            <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortFlat'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='BeardLight'
                facialHairColor='Black'
                clotheType='CollarSweater'
                clotheColor='Gray02'
                eyeType='Default'
                eyebrowType='RaisedExcitedNatural'
                mouthType='Default'
                skinColor='Brown'
                />
        </div>
    )

}

export default Headshot
