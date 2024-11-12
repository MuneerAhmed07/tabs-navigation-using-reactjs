import React from 'react'

const TabContent = ({activeTab}) => {
  return (
    <>
        <div className="tab-content">
            {
                activeTab === "HTML" && (
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit quisquam exercitationem dignissimos beatae nam consequuntur animi. Voluptas, architecto. Laudantium mollitia dignissimos earum provident ratione facere consequuntur suscipit, eaque minus?</p>
                )
            }
            {
                activeTab ==="CSS" && (
                    <p> CSS, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quibusdam adipisci, commodi molestias illo dolorem repellat repellendus quisquam perferendis nesciunt.</p>
                )
            }

{
                activeTab ==="JavaScript" && (
                    <p>JavaScript, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, corrupti!</p>
                )
            }
        </div>
    </>
  )
}

export default TabContent;
