import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InboxOutline.svg';

export function InboxOutline(props: TProps) {
  return (
    <Icon {...props} name="InboxOutline">
      <SVG />
    </Icon>
  );
}
