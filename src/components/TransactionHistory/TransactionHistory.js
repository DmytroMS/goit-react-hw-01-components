import PropTypes from "prop-types"
import t from "./Transactions.module.css"

function TransactionHistory({ items }) {
    return (
        <table className= {t.transactionHistory}>
        <thead>
            <tr>
            <th className= {t.title}>Type</th>
            <th className= {t.title}>Amount</th>
            <th className= {t.title}>Currency</th>
            </tr>
        </thead>

        <tbody>
                    {
                        items.map(item => (
                    <tr className={t.raw} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                     </tr>
                    ))

                    }
            
        </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({

        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    
)



}