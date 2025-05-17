import { Action, ActionPanel, Form } from "@raycast/api";

import { handleStyleToggle } from "@lib";

import { FORM } from "@constants";

export default function Command() {
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title={FORM.ACTION} onSubmit={handleStyleToggle} />
        </ActionPanel>
      }
    >
      <Form.Description text={FORM.DESCRIPTION} />
      <Form.TextArea id="input" placeholder={FORM.PLACEHOLDER} />
    </Form>
  );
}
