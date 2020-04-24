import * as React from 'react';

const text =
    'We believe that we can change the things around us in accordance with our desires—we believe it because otherwise we can see no favourable outcome. We do not think of the outcome which generally comes to pass and is also favourable: we do not succeed in changing things in accordance with our desires, but gradually our desires change. The situation that we hoped to change because it was intolerable becomes unimportant to us. We have failed to surmount the obstacle, as we were absolutely determined to do, but life has taken us round it, led us beyond it, and then if we turn round to gaze into the distance of the past, we can barely see it, so imperceptible has it become.';

export const TypeInput = (props) => {
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [inputWord, setInputWord] = React.useState('');

    const handleChange = (e) => {
        if (!props.started) {
            return;
        }

        setInputWord(e.currentTarget.value);
        if (e.currentTarget.value === text.split(' ')[currentWordIndex]) {
            setCurrentWordIndex(v => v + 1);
            setInputWord('');
        }
    };
    return (
        <div>
            <h1>{text.split(' ')[currentWordIndex]}</h1>
            <input
                style={{ width: '80%', height: '40px', fontSize: '32px' }}
                type="text"
                placeholder="Get Ready!"
                onChange={handleChange}
                value={inputWord}
            />
        </div>
    );
};
