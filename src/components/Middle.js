import React from 'react'
import '../memesData'
import memesData from '../memesData'

export default function Middle() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    url: '',
  })

  const [memeImage, setMemeImage] = React.useState()

  function handleClick() {
    const randomNum = Math.trunc(Math.random() * 99) + 1

    const randomMemeUrl = memesData.data.memes[randomNum].url

    setMeme((preMeme) => {
      return {
        ...preMeme,
        url: randomMemeUrl,
      }
    })
  }

  function handleChange(event) {
    const { name, type, value } = event.target
    setMeme((preData) => {
      return {
        ...preData,
        [name]: value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="middle">
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input type="text" name="topText" placeholder="Top Text" onChange={handleChange} value={meme.topText} />
          <input type="text" name="bottomText" placeholder="Bottom Text" onChange={handleChange} value={meme.bottomText} />
        </div>
        <button name="submit-btn" onClick={handleClick} className="form-btn">
          Get a new meme image
        </button>
      </form>

      <br />
      <div className="meme">
        {meme.url && <img src={meme.url} alt="meme-img" className="meme--image" />}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
