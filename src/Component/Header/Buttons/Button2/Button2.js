import Button2Items from "./Button2Item";

const Button2 = () => {
  return (
    <div className="btn-group allbutton2">
      <button
        type="button"
        className="btn  dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <b>English</b>
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <Button2Items text={"Action"} />
        <Button2Items text={" Another action"} />
        <Button2Items text={" Start a Free Trial"} />
      </div>
    </div>
  );
};

export default Button2;
