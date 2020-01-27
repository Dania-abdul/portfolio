 import * as React from 'react';
import { type } from 'os';
import i18next from 'i18next';
import {PrimaryButton, Stack, DefaultButton} from 'office-ui-fabric-react'

export type HomeFabricState = {
}

export type HomeFabricProps = {
}

export class HomeFabricComponent extends React.Component <HomeFabricProps, HomeFabricState> {
    constructor(props : HomeFabricProps) {
        super(props);
        this.state = { }
    }
    render(){
        return <Stack horizontal gap={20} >
            <DefaultButton text="Dania def" />
            <PrimaryButton text="Dania pri" />
        </Stack>
    }
}
