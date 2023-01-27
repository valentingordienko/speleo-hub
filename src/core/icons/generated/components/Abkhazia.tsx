import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Abkhazia.svg';

export function Abkhazia(props: TBaseProps) {
  return (
    <Icon {...props} name="Abkhazia">
      <SVG />
    </Icon>
  );
}
