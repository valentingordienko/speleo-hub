import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteStyleOutline.svg';

export function DeleteStyleOutline(props: TProps) {
  return (
    <Icon {...props} name="DeleteStyleOutline">
      <SVG />
    </Icon>
  );
}
