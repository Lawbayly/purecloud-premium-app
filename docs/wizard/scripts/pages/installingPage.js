

/**
 * Configure PureCloud and install everything as defined from the 
 * stagingArea member. This should be the last step of the installation wizard.
 * @param {*} event 
 */
export default function installAppConfigurations(event){
    this.logInfo = (info) => {
        console.log(info);
        $("#install-log")
        .append("<p class='has-text-grey is-marginless'><em>" +
                    info + "</em></p>");
    }


    // Remove controls
    this._renderModule(this._getTemplate('wizard-installing'), this.app.stagingArea, 'wizard-content')
    this._renderModule(this._getTemplate('blank'), this.app.stagingArea, 'wizard-control'); 

    this.app.installConfigurations()
    .then(() => {
        $("#install-log")
        .append("<button id='btn-start-wizard' class='button is-info has-text-centered is-size-4'>" +
            "Back to Status" +
            "</button>"
        );

        this._setButtonClick(this, '#btn-start-wizard', this._getPageSetter("installStatusPage"));
    });
}
