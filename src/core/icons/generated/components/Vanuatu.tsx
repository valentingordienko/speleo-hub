import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Vanuatu.svg';

export function Vanuatu(props: TBaseProps) {
  return (
    <Icon {...props} name="Vanuatu">
      <SVG />
    </Icon>
  );
}
