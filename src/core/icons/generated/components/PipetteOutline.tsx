import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PipetteOutline.svg';

export function PipetteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PipetteOutline">
      <SVG />
    </Icon>
  );
}
