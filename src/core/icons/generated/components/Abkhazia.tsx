import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Abkhazia.svg';

export function Abkhazia(props: TProps) {
  return (
    <Icon {...props} name="Abkhazia">
      <SVG />
    </Icon>
  );
}
