import React from 'react';
import './WysiwygAlignmentButtons.css';

interface WysiwygMarkupToolbarProps {
    onLeftAlignmentClick: () => void;
    onCenterAlignmentClick: () => void;
    onRightAlignmentClick: () => void;
}

const WysiwygAlignmentButtons: React.FC<WysiwygMarkupToolbarProps> = ({
    onLeftAlignmentClick,
    onCenterAlignmentClick,
    onRightAlignmentClick,
}) => (
    <div style={{ marginRight: '3rem' }}>
        <button style={{ width: '50px' }} onClick={onLeftAlignmentClick}>
            <span style={{ display: 'flex', minWidth: '100%' }}>
                <div>&equiv;</div>
            </span>
        </button>
        <button style={{ width: '50px' }} onClick={onCenterAlignmentClick}>
            <span
                style={{
                    display: 'flex',
                    minWidth: '100%',
                    justifyContent: 'center',
                }}
            >
                <div>&equiv;</div>
            </span>
        </button>
        <button style={{ width: '50px' }} onClick={onRightAlignmentClick}>
            <span
                style={{
                    display: 'flex',
                    minWidth: '100%',
                    justifyContent: 'flex-end',
                }}
            >
                <div>&equiv;</div>
            </span>
        </button>
    </div>
);

export default WysiwygAlignmentButtons;
