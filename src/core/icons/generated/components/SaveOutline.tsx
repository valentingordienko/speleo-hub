import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaveOutline.svg';

export function SaveOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SaveOutline">
      <SVG />
    </Icon>
  );
}
