import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NetherlandsAntillesCountry.svg';

export function NetherlandsAntillesCountry(props: TProps) {
  return (
    <Icon {...props} name="NetherlandsAntillesCountry">
      <SVG />
    </Icon>
  );
}
