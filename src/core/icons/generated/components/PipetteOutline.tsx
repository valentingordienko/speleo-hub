import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PipetteOutline.svg';

export function PipetteOutline(props: TProps) {
  return (
    <Icon {...props} name="PipetteOutline">
      <SVG />
    </Icon>
  );
}
