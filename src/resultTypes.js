const resultType = Object.freeze({
    success: {
      value: 100,
      render: "🤓",
      className: 'ResultSquareCorrect'
    },
    failed: {
      value: -75,
      render: "🤦",
      className: 'ResultSquareIncorrect'
    },
    skipped: {
      value: -25,
      render: "😴",
      className: 'ResultSquareSkipped'
    }
});

export default resultType;