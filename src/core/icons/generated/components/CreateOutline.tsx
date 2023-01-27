import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateOutline.svg';

export function CreateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CreateOutline">
      <SVG />
    </Icon>
  );
}
