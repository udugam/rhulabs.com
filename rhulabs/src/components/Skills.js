import React from 'react'

const Skills = (props) => {
    const styles = {
        container: {
            display: 'flex',
        },
        listBox: {
            width: '66vw',
            alignSelf: 'center'
        }
    
    }

    return(
        <div style={styles.container}>
            <div style={styles.listBox}>
                <img alt='Front End Icon' src='https://via.placeholder.com/150'/>
                <h1>Frontend Developer</h1>
                <div>Node.js</div>
                <div>Node.js</div>
            </div> 
            <div style={styles.listBox}>
                <img alt='Back End Icon' src='https://via.placeholder.com/150'/>
                <h1>Backend Developer</h1>
                <div>Node.js</div>
                <div>Node.js</div>
            </div>        
            <div style={styles.listBox}>
                <img alt='Back End Icon' src='https://via.placeholder.com/150'/>
                <h1>Mentor</h1>
                <div>Node.js</div>
                <div>Node.js</div>
            </div>       
        </div>
    )
}

export default Skills