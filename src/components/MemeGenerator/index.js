import './index.css'
import {Component} from 'react'
import {Meme, Text} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    memeDetails: {},
  }

  onChangeImgUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangetopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderimgUrlInputField = () => {
    const {imgUrl} = this.state
    return (
      <div className="input-feild-container">
        <label htmlFor="imgUrl" className="input-label">
          Image URL
        </label>
        <br />
        <input
          className="input-feild"
          type="text"
          id="imgUrl"
          placeholder="Enter The Image URL"
          value={imgUrl}
          onChange={this.onChangeImgUrl}
        />
      </div>
    )
  }

  renderTopTextInputField = () => {
    const {topText} = this.state
    return (
      <div className="input-feild-container">
        <label htmlFor="topText" className="input-label">
          Top Text
        </label>
        <br />
        <input
          className="input-feild"
          type="text"
          id="topText"
          placeholder="Enter The Top Text"
          value={topText}
          onChange={this.onChangetopText}
        />
      </div>
    )
  }

  renderBottomTextInputField = () => {
    const {bottomText} = this.state
    return (
      <div className="input-feild-container">
        <label htmlFor="bottomText" className="input-label">
          Bottom Text
        </label>
        <br />
        <input
          className="input-feild"
          type="text"
          id="bottomText"
          placeholder="Enter The Bottom Text"
          value={bottomText}
          onChange={this.onChangeBottomText}
        />
      </div>
    )
  }

  renderSelectOptions = () => {
    const {fontSize} = this.state
    return (
      <div className="input-feild-container">
        <label htmlFor="fontSize" className="input-label">
          Font Size
        </label>
        <br />
        <select
          className="input-feild"
          name="fontSize"
          id="fontSize"
          value={fontSize}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(each => (
            <option
              className="select-option"
              id={each.optionId}
              value={each.optionId}
              key={each.optionId}
            >
              {each.displayText}
            </option>
          ))}
        </select>
      </div>
    )
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    if (
      imgUrl !== '' &&
      topText !== '' &&
      bottomText !== '' &&
      fontSize !== ''
    ) {
      const updatedMemeDetails = {imgUrl, topText, bottomText, fontSize}
      this.setState({memeDetails: updatedMemeDetails})
    } else {
      console.log('enter all 4')
    }
  }

  renderMeme = () => {
    const {memeDetails} = this.state
    console.log(memeDetails)
    const {imgUrl, topText, bottomText, fontSize} = memeDetails
    return (
      <Meme fontSize={fontSize} imgUrl={imgUrl} data-testid="meme">
        <Text fontSize={fontSize}>{topText}</Text>
        <Text fontSize={fontSize}>{bottomText}</Text>
      </Meme>
    )
  }

  render() {
    return (
      <div className="meme-generator-page">
        <div className="meme-generator">
          <div className="meme-form-container">
            <h1 className="meme-generator-heading">Meme Generator</h1>
            <form className="meme-form" onSubmit={this.onGenerateMeme}>
              {this.renderimgUrlInputField()}
              {this.renderTopTextInputField()}
              {this.renderBottomTextInputField()}
              {this.renderSelectOptions()}
              <button className="generate-btn" type="submit">
                Generate
              </button>
            </form>
          </div>
          <div className="meme-container">{this.renderMeme()}</div>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
