export const Student = (props) => {
  return (
    <div className="Student">
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>

            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>

            <tr>
                <th>isMarried</th>
                <td>{props.isMarried ? "yes" : "no"}</td>
            </tr>
        </table>
    </div>
  );
};
