import { Modal, Button } from "antd"
import React, { useState } from "react"

export default function DisplayAddCircuitModal() {
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)
  const showModal = () => {
    setVisible(true)
  }
  const onHover = () => {
    setHover(true)
  }
  const onLeave = () => {
    setHover(false)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const handleOk = () => {
      setVisible(false)
  }

  const links = new String(image)
  let items = links.split("\n").filter(item => item != "" || item != " ")
  let width = items.length * 700
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
          <Button onClick={showModal}>
            Add New Diagram
      </Button>
      <Modal
        title={"Add New Diagram"}
        visible={visible}
        onCancel={handleCancel}
        width={width}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            Done
          </Button>,
        ]}
      >
        <div id="code-display-text">
        </div>
      </Modal>
    </div>
  )
}