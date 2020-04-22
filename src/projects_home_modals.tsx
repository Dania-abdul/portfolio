projects_home_modal = (selected_card:cardData) => {
    
    return (
      <Modal
          titleAriaId={"Some title (use i18 for multilangauge)"}
          subtitleAriaId={"Some subtitle (use i18 for multilangauge)"}
          isOpen={true}
          isBlocking={false}
          onDismiss={() => {this.setState({...this.state, overlay : {kind:"projects_home"}})}}
          containerClassName={"container modal__container"}>
          <div className={"modal__header"}>
            <h4 className="modal__title ">{i18next.t(selected_card.post_title)}</h4>
            <IconButton
              iconProps={{ iconName: 'Cancel' }}
              ariaLabel="Close popup modal"
              onClick={() => {this.setState({...this.state, overlay : {kind:"projects_home"}})}}
            />
          </div>
          <div className={"modal__content"}>
            <div className="post-header">
              <div className="post-header__content">
                <div className="post-header__top">
                  <div className="post-header__label post-text--s"><span className="post-label">category</span></div>
                  <div className="post-header__date post-text--s"> <span className="post-date">16/2/2020</span></div>
                </div>
                <div className="post-header__title">
                  <h1 className="post-title--l">{i18next.t(selected_card.post_title)}</h1>
                </div>
                <div className="post-header__text">
                  <p className="post-text--m">
                    {i18next.t(selected_card.modal_desc)}
                  </p>
                </div>
              </div>
              <div className="post-header__visual">
                <img src={selected_card.image_url} alt="" className="post-header__img"/>
              </div>
            </div>
          </div>
          <div className="modal__footer">
            <DefaultButton className="modal__btn" text="Read more" onClick={() => window.location.href=selected_card.url} allowDisabledFocus  />
          </div> 
        </Modal>
    )
  }