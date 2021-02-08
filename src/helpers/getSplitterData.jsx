
export const getSplitterData = data => {

    if (data) {
        return data.map( ({type, value, url}) => (
                <div className='row container textWhite' key={value}>
                    <div className="col-6 textEnd">
                        <span><b>{type}</b></span>
                    </div>
                    <div className="col-6 textStart">
                        {url ?
                            <a href={url} className={`${getTextSplitter(value)} educationUrl`} target='_blank' rel="noreferrer">{value}</a>
                            :
                            <p className={getTextSplitter(value)}>{value}</p>
                        }
                    </div>
                </div>
            )
        )
    }
}

const getTextSplitter = value => value.length > 20 ? 'textSm' : ''

export const getTextSize = value => {
    switch (true) {
        case value>20 && value<129:
            return 'textMd'
        case value>150:
            return 'textSm'
        default:
            return ''
    }
}