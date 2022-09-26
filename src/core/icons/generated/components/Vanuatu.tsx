import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Vanuatu.svg';

export function Vanuatu(props: TProps) {
  return (
    <Icon {...props} name="Vanuatu">
      <SVG />
    </Icon>
  );
}
