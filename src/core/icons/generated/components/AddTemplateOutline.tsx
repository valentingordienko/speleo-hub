import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddTemplateOutline.svg';

export function AddTemplateOutline(props: TProps) {
  return (
    <Icon {...props} name="AddTemplateOutline">
      <SVG />
    </Icon>
  );
}
