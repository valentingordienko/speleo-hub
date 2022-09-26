import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaveOutline.svg';

export function SaveOutline(props: TProps) {
  return (
    <Icon {...props} name="SaveOutline">
      <SVG />
    </Icon>
  );
}
