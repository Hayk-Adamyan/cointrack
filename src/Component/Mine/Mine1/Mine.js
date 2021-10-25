import "./Mine.css";
import blok1 from "./../../../img/blok/blok1.png";
import blok2 from "./../../../img/blok/blok2.png";
import blok3 from "./../../../img/blok/blok3.png";
import blok4 from "./../../../img/blok/blok4.png";
import town from "./../../../img/town.png";
const Mine1 = () => {
  return (
    <div className="Mine">
      <div className="mineContent">
        <div>
          <div className="Start">
            <div className="left">
              <div className="StartTracking">
                <h2>
                  Start tracking your crypto portfolio on any exchange.
                  Anywhere. Anytime.
                </h2>
              </div>
              <div className="Getdetailed">
                <p>
                  Get detailed balances and transaction histories from all the
                  leading cryptocurrency exchanges and wallets.
                </p>
              </div>

              <div className="button3">
                <button
                  type="button"
                  className="prim firstbutton btn btn-primary"
                >
                  Start a Free Trial
                </button>
              </div>
            </div>
            <div className="town">
              <img src={town} />
            </div>
          </div>
          <div className="bloks">
            <div>
              <img src={blok1} />
            </div>
            <div>
              <img src={blok2} />
            </div>
            <div>
              <img src={blok3} />
            </div>
            <div>
              <img src={blok4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mine1;
