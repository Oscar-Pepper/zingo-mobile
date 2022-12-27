export default class ErrorModalData {
  title: string;
  body: string;

  modalIsOpen: boolean;

  constructor(title: string, body: string) {
    this.modalIsOpen = false;
    this.title = title;
    this.body = body;
  }
}
