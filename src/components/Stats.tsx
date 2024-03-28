export const Stats = ({
  numItems,
  numPacked,
  percentage,
}: {
  numItems: number;
  numPacked: number;
  percentage: number;
}) => {
  {
    if (!numItems)
      return (
        <p className="stats">
          <em>start adding items to your list 🚀 </em>
        </p>
      );

    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "you have everything, redy to go ✈️"
            : ` you have ${numItems} items on your list,and you alrady packed ${numPacked}
        these is (${percentage} %)`}
        </em>
      </footer>
    );
  }
};
