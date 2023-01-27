import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NetherlandsAntillesCountry.svg';

export function NetherlandsAntillesCountry(props: TBaseProps) {
  return (
    <Icon {...props} name="NetherlandsAntillesCountry">
      <SVG />
    </Icon>
  );
}
