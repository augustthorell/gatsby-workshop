import * as React from 'react'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#663399",
}

const aboutMe = () => {
    return (
        <main style={pageStyles}>
            <title>About Me Page</title>
            <h1 style={headingStyles}>
                Hey here's everything you need to know about me
            <br />
                <span style={headingAccentStyles}>Ehh I don't even know myself</span>
                <span role="img" aria-label="Party popper emojis">
                    🎉🎉🎉
            </span>
            </h1>

        </main>
    )
}

export default aboutMe
